import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Method to Show messages on any messages.
 */

export const showMessage = (_type, _message) => {
    switch(_type) {
        case 'info' : 
            toast.info(_message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'success' : 
            toast.success(_message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'error' : 
            toast.error(_message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        case 'warn' : 
            toast.warn(_message, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

    }
    
}