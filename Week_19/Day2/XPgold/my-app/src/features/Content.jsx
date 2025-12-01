import { useSelector } from "react-redux";
import Logout from './Logout.jsx';
import Login from './Login.jsx';

export default function() {
    const { loggedIn, currentUser } = useSelector((state) => state.auth);

    return (
        <>
        { !loggedIn && (
            <Login />
        )}
        {loggedIn && currentUser && (
            <div className="p-6">
                <Logout />
                <br /><br />
                <h1 className="text-2xl font-bold mb-4">Welcome to your Instagram, {currentUser.name}! </h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full max-w-3xl">
                    <img
                        className="w-full h-48 object-cover rounded-lg"
                        src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"/>
                    <img 
                        className="w-full h-48 object-cover rounded-lg" 
                        src="https://static.toiimg.com/thumb/msid-110769473,width-748,height-499,resizemode=4,imgsize-244708/.jpg" />
                    <img 
                        className="w-full h-48 object-cover rounded-lg"
                        src="https://media.licdn.com/dms/image/v2/D5612AQENltQvmBK5Gg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713421064651?e=2147483647&v=beta&t=nEx2PdetKjbU-evubqR_Bv2VRqfpRMJRWtRJZYYKFmo" />
                    <img 
                        className="w-full h-48 object-cover rounded-lg"
                        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70" />
                </div>
            </div>
        )}
        </>
    );
}