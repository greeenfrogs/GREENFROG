import React ,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Request.css';
import '../index.css';
import intro_act from './figfile/intro_act.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import frog_click_svg from './buttonfile/frog_click.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Pagination from './Pagination';

export default function Activity() {
    const navigate = useNavigate();
    const [frogClicked, setFrogClicked] = useState(Array.from({ length: 11 }, () => false));
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const totalPages = 10;

    useEffect(() => {
        fetch(`/api/activity?page=${currentPage - 1}&size=10`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [currentPage]);


    const handleFrogClick = (row) => {
        const updatedFrogClicked = [...frogClicked];
        updatedFrogClicked[row] = !updatedFrogClicked[row];
        setFrogClicked(updatedFrogClicked);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    return (
        <div >
            <span className="introduce_container">
                <img className="introduce_image" src={intro_act} alt="intro_fact" />
            </span>
            <div className="header_req">
                <div className="menu-left">
                    <img 
                        className="Searchbar" 
                        src={searchbar_svg} 
                        alt="searchbar" 
                    />
                </div>
            </div>
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>날짜</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, rowIndex) => (
                        <tr key={post.id} className="table-row">
                            <td>
                                <img
                                    src={frogClicked[rowIndex] ? frog_click_svg : frog_empty_svg}
                                    alt={`frog_${rowIndex}`}
                                    className="frog-icon"
                                    onClick={() => handleFrogClick(rowIndex)}
                                />
                            </td>
                            <td>
                             {new Date(post.date).toLocaleDateString()} {/* 날짜 출력 */}
                            </td>
                            <td>
                                    <span
                                        className="link"
                                        onClick={() => navigate(`/request/view/${post.id}`)}
                                    >
                                        {post.title}
                                    </span>
                            </td>
                            <td>{post.client}</td>
                            <td>
                                <img
                                    src={correct_button_svg}
                                    alt={`correct_button_${rowIndex}`}
                                    className="correct-icon"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />
        </div>
    )
}