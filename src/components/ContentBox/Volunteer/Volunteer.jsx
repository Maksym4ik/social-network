import Photo from "../../img/photo.jpg";
import React from "react";
import c from "./Volunteer.module.scss"


const Volunteer = (props) => {

    return (

        <div>
            <div className={c.flex}>
                <img src={Photo} alt=""/>
                <div className={c.wrapper}>
                    <h1>{props.firstName}</h1>
                    <h3>{props.career}</h3>
                    <div className={`${c.flex} ${c.wrapper200}`}>
                        <h3>{props.location}</h3>
                        <h3>{props.age} років</h3>
                    </div>
                    <span>{props.about}</span>
                </div>

            </div>
            <hr className={c.hrContent}/>
        </div>
    )
}

export default Volunteer;

// <div>
//     <div className={c.flex}>
//         <img src={Photo} alt=""/>
//         <div className={c.wrapper}>
//             <h1>{props.firstName}</h1>
//             <h3>{props.nameInfo}</h3>
//             <div className={`${c.flex} ${c.wrapper200}`}>
//                 <h3>{props.location}</h3>
//                 <h3>{props.age}</h3>
//             </div>
//             <span>{props.description}</span>
//         </div>
//
//     </div>
//     <hr className={c.hrContent}/>
// </div>