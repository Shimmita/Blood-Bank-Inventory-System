        import React from 'react'
        import { Image } from 'react-bootstrap'
        export const ChatBot = () => {
        return (
            <div>
                <hr style={{color:'white'}} />
            <section>
                <Image
                src={require("../../../images/bot_image.jpg")}
                width={100}
                className="border"
                style={{ borderRadius: "50%" }}
                />
                <div>
                <form>
                    <div className="form-group">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="mx-3 my-3 text-light"
                    >
                        Enter Your Question
                    </label>
                    <textarea
                        className="form-control shadow"
                        id="exampleFormControlTextarea1"
                        placeholder='type your question ...'
                        rows={4}
                    />
                    </div>
                    <button type="info" className="btn btn-outline-light mt-2 w-100">
                    Submit
                    </button>
                </form>
                </div>

                <div>
                    <p className='text-light text-center mt-3'>response will be displayed below</p>
                <textarea
                    className="form-control shadow rounded"
                    id="exampleFormControlTextarea1"
                    rows="10"
            
                    disabled={true}
                    style={{opacity:'.8'}}
                />
                </div>
            </section>
            </div>
        )
        }
