import React, { useEffect, useState } from 'react';
import './Request_viewmode.css';
import intro_req from '../figfile/intro_req.svg';
import EditButton from '../buttonfile/correct_button.svg'; // 수정 버튼 이미지
import DeleteButton from '../buttonfile/correct_button.svg'; // 삭제 버튼 이미지
import { useParams, useNavigate } from 'react-router-dom';

export default function RequestViewmode() {
    const { id } = useParams(); // URL에서 요청 ID 가져오기
    const [request, setRequest] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const response = await fetch(`/api/request/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setRequest(data);
                } else {
                    console.error('Error fetching request:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching request:', error);
            }
        };
        fetchRequest();
    }, [id]);

    const handleEdit = () => {
        navigate(`/request/edit/${id}`);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/request/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Request deleted successfully');
                navigate('/request'); // Navigate to request page after successful deletion
            } else {
                console.error('Error deleting request:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting request:', error);
        }
    };

    if (!request) {
        return <div>Loading...</div>;
    }

    //댓글 관련 js : 나중에 back-end와 연결할 때 수정할 것.
    const commentBtn = document.querySelector("#commentFrm");
    const commentList = document.querySelector("#comment-list");
    const total = document.querySelector("h4 > span");
    const list = [];
    
    function Comment(content) {
      this.userid = "cloudcoke";
      this.content = content;
      this.date = "2022-11-15";
    }
    
    function createRow(userid, content, date) {
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      const li3 = document.createElement("li");
    
      ul.append(li1);
      ul.append(li2);
      ul.append(li3);
    
      ul.setAttribute("class", "comment-row");
      li1.setAttribute("class", "comment-id");
      li2.setAttribute("class", "comment-content");
      li3.setAttribute("class", "comment-date");
    
      li1.innerHTML = userid;
      li2.innerHTML = content;
      li3.innerHTML = date;
    
      return ul;
    }
    
    function drawing() {
      commentList.innerHTML = "";
      for (let i = list.length - 1; i >= 0; i--) {
        const row = createRow(list[i].userid, list[i].content, list[i].date);
        commentList.append(row);
      }
    }
    
    function totalRecord() {
      total.innerHTML = `(${list.length})`;
    }
    
    function commentBtnHandler(e) {
      e.preventDefault();
      const input = e.target.content;
      if (input.value === "") {
        alert("내용을 넣고 등록 버튼을 눌러주세요.");
        return;
      }
      const commentObj = new Comment(input.value);
      list.push(commentObj);
      totalRecord();
    
      drawing();
      e.target.reset();
    }
    
    totalRecord();
    commentBtn.addEventListener("submit", commentBtnHandler);

    return (
        <div className='introduce_container'>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            <div className="title-container">
                <h1 className="heading2">의뢰 제목</h1>
                <div className="name-box">{request.title}</div>
            </div>
            <div className="client-container">
                <h2 className="heading2">{request.id}</h2>
                <div className="email-box">{request.client}</div>
            </div>
            <textarea
                className="write-container"
                value={request.content}
                readOnly
            />
            <div className="submit-container">
                <img
                    className='EditButton'
                    src={EditButton}
                    alt='EditButton'
                    onClick={handleEdit}
                />
                <img
                    className='DeleteButton'
                    src={DeleteButton}
                    alt='DeleteButton'
                    onClick={handleDelete}
                />
            </div>
            <div className='comment-container'>
                <ul class="comment">
                    <li class="comment-form">
                        <form id="commentFrm">
                            <h4>댓글쓰기 <span></span></h4>
                            <span class="ps_box">
                                <input type="text" placeholder="댓글 내용을 입력해주세요." class="int" name="content" />
                            </span>
                            <input type="submit" class="btn" value="등록" />
                        </form>
                    </li>
                    <li id="comment-list"></li>
                </ul>
            </div>
            
        </div>
    );
}