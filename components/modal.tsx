import { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom'

type Props = {
    onClose: any,
    children?: JSX.Element | string
    show?: boolean,
}

const Modal: React.FC<Props> = (props: Props) => {
    const { onClose, children } = props;

  const [isBrowser, setIsBrowser] = useState(false);
//   const modalWrapperRef = useRef<HTMLDivElement>(null);

//   const backdropHandler = (event: any) => {
//     if (!modalWrapperRef?.current?.contains(event.target)) {
//         onClose();
//     }
//   }

    useEffect(() => {
        setIsBrowser(true);

        // window.addEventListener('click', backdropHandler);
        // return () => window.removeEventListener('click', backdropHandler)
      }, []);
  

      const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
      };

      const modalContent = (
        <div id="modalOverlay" className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50">
            <div id="modalWrapper">
                <div className="bg-white w-[500px] h-[600px] rounded p-4">
                    <div className="flex justify-end font-medium">
                        <a href="#" onClick={handleCloseClick}>x</a>
                    </div>
                    <div className="pt-3">{children}</div>
                </div>
            </div>
        </div>
      );

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root") as HTMLAnchorElement
        )
    } else {
        return null;
    }
}

export default Modal;