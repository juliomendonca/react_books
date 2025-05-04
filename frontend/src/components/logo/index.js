import styled from "styled-components";

import logo from "../../assets/logo.svg";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <p><strong>JA2</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo
