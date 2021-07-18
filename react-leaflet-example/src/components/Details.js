import React from "react";
import "../App.css";

const Details = ({ setOpen, feature }) => {

    return (
        <div className='details-container'>
            <div className='details-close'
                onClick={() => setOpen(false)}
            >X</div>
            <div className='details-info'>
                <table>
                    <tbody>
                        {Object.entries(feature).map(([key, val]) => {
                                return (
                                    <tr>
                                        <td>{key} </td>
                                        <td>{val}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Details;