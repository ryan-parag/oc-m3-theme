import OCLogo from '../OCLogo';
import MasoniteLogo from '../MasoniteLogo';

const LogoRender = ({ company }) => {

    const getLogo = (x) => {
        switch(x) {
            case 'Masonite':
                return <MasoniteLogo/>
                break;
            case 'Owens Corning':
                return <OCLogo/>
                break;
            default:
                return null
                break;
        }
    }

    return(
        <>
            {
                getLogo(company)
            }
        </>
    )
}

export default LogoRender;