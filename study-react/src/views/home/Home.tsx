import * as React from "react";
import { useNavigate } from "react-router-dom";
import { UserList } from "../../components/userList/UserList";
export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleToHtml = () => {
    navigate("/htmlCode");
  };
  return (
    <div className="container mx-auto">
      <div className="mt-4 flex gap-5">
        <div className="flex-1 card  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">交流讨论</h2>
            <div>
              {[1, 2, 3, 4, 5].map((list) => {
                return <UserList key={list} />;
              })}
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">社区小帖</h2>
            <p>HTML Code 社区是一个主张友好、帮助、低消费的学习交流社区。</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleToHtml}>
                前往商城
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
