import {FaXbox, FaPlaystation, FaWindows, FaLinux, FaPlayCircle} from "react-icons/fa"
import {SiNintendo} from "react-icons/si"


function changePlatformToImage(platform){

    if(platform === 'xbox') {
        return <FaXbox className='w-5 text-black h-5 mb-1 inline'/>
    }
    if(platform === 'playstation') {
        return <FaPlaystation className='w-5 text-black h-5 mb-1 inline'/>
    }
    if(platform === 'pc') {
        return <FaWindows className='w-5 text-black h-5 mb-1 inline'/>
    }
    if(platform === 'linux') {
        return <FaLinux className='w-5 text-black h-5 mb-1 inline'/>
    }
    if(platform === 'nintendo') {
        return <SiNintendo className='w-5 text-black h-5 mb-1 inline'/>
    }

}

export default changePlatformToImage;
