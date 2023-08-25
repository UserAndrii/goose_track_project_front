import toast from 'react-hot-toast';

export const showErrorToast = message => {
  toast.error(message, {
    duration: 5000,
    position: 'top-right',
    // Custom Icon
    icon: '👏',
  });
};

export const showSuccessToast = message => {
  toast.success(message, {
    duration: 5000,
    position: 'top-right',
    // Custom Icon
    icon: '👏',
  });
};