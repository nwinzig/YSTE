import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='greeting'>
                <div>Meet the developers</div>
            </div>
            <div className='foot-outer-cont'>
                <div className="yste-div">
                    <a className='yste-text' href="https://github.com/nwinzig/YSTE">YSTE 2022</a>
                </div>
                <div className='dev-names'>
                    <div className='dev-ind'>
                        Caleb Flores
                        <div>
                            <a className='ind-link' href='https://github.com/Cal-Flores' >GitHub</a>
                            <a className='ind-link' href='https://www.linkedin.com/in/caleb-flores-5a988a257/'>LinkedIn</a>
                        </div>
                    </div>
                    <div className='dev-ind'>
                        Donovan Galloway
                        <div>
                            <a className='ind-link' href='https://github.com/Dogallow'>GitHub</a>
                            <a className='ind-link' href='https://www.linkedin.com/in/donovan-galloway-927190233/'>LinkedIn</a>
                        </div>
                    </div>
                    <div className='dev-ind'>
                        Noah Winzig
                        <div>
                            <a className='ind-link' href='https://github.com/nwinzig'>GitHub</a>
                            <a className='ind-link' href='https://www.linkedin.com/in/noah-winzig-30588b231/' >LinkedIn</a>
                        </div>
                    </div>
                    <div className='dev-ind'>
                        Trevor Jones
                        <div>
                            <a className='ind-link' href='https://github.com/Trevor1798'>GitHub</a>
                            <a className='ind-link' href='https://www.linkedin.com/in/trevor-jones-458b75202/'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
