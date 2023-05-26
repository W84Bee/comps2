import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>
            I Accept
        </Button>
    </div>

    const modal = <Modal
        onClose={handleClose}
        actionBar={actionBar}
    >
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam ut tortor blandit pharetra. In semper in lacus porta commodo. Mauris mattis lacinia sapien, in aliquam turpis maximus a. Duis et odio dignissim, mollis urna in, lacinia velit. Curabitur tristique vehicula convallis. Curabitur eget ante aliquet, mattis lorem sed, finibus mauris. Sed mauris quam, imperdiet at urna eget, fermentum blandit sem.
            </p>

        </div>
    );
}

export default ModalPage;