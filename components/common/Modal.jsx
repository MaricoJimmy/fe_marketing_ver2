import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

function Modal({ title, className = '', children, open, onOpenChange }) {
    return (
      <Dialog {...{ open, onOpenChange }}>
        <DialogContent className={`${className}`}>
          <DialogHeader className='mb-2'>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

export default Modal