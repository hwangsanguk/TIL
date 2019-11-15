import React from 'react';
const ApprovalCard = (props) =>{
return(
    <div className="ui card">
        <div className="content">
            {props.children}
        </div>
        <div className="extra content">
            <div className="ui two button">
                <div clasSName="ui basic green button">Approve</div>
                <div clasSName="ui basic red button">Reject</div>
            </div>
        </div>
    </div>
)
};
export default ApprovalCard;