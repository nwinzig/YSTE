import './footer.css'

function Footer() {
    return (
        <footer className='footerWrapper'>
            <div className='greeting'>
                <div>Meet the developers</div>
            </div>
            <div className='foot-outer-cont'>
                <div className="yste-div">
                    <a className='yste-text' href="https://github.com/nwinzig/YSTE">YSTE 2022</a>
                </div>
                <div className='dev-names'>
                    <div className='dev-ind'>
                        <div className='theDevName'>
                            Caleb Flores
                        </div>
                        <a className='ind-link' href='https://github.com/Cal-Flores' >
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a className='ind-link' href='https://www.linkedin.com/in/caleb-flores-5a988a257/'>
                                <i class="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                    <div className='dev-ind'>
                        <div className='theDevName'>
                            Donovan Galloway
                        </div>
                        <a className='ind-link' href='https://github.com/Dogallow'>
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a className='ind-link' href='https://www.linkedin.com/in/donovan-galloway-927190233/'>
                            <i class="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                    <div className='dev-ind'>
                        <div className='theDevName'>
                            Noah Winzig
                        </div>
                        <a className='ind-link' href='https://github.com/nwinzig'>
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a className='ind-link' href='https://www.linkedin.com/in/noah-winzig-30588b231/' >
                            <i class="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                    <div className='dev-ind'>
                        <div className='theDevName'>
                            Trevor Jones
                        </div>
                        <a className='ind-link' href='https://github.com/Trevor1798'>
                            <i class="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a className='ind-link' href='https://www.linkedin.com/in/trevor-jones-458b75202/'>
                            <i class="fa-brands fa-linkedin fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
