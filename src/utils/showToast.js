import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showErrorToast = message => {
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  toast.error(message, toastOptions);
};

export const showSuccessToast = message => {
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  toast.success(message, toastOptions);
};
