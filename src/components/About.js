import React, { useState } from 'react'

export default function About(props) {

    //   const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    //   }  );

    //   const [btnText, setbtnText] = useState("Enable Dark Mode")

    //   const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: "1px solid white"
    //           });
    //           setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setbtnText("Enable Dark Mode");
    //     }
    //   }
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#00103c',
        backgroundColor: props.mode === 'dark' ? '#00103c' : 'white',

    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-2' style={{ color: props.mode === 'dark' ? 'white' : '#00103c' }} >About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtil is a free character counter tool that gives instant character count and word count statistics for a given text.Thus it is useful
                            to limit the character/word count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software can be used by any browser such as chrome, internet explorer, brave, safari etc. It suits count character in
                            faceboook, blog, pdf, essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}

        </div>
    )
}
