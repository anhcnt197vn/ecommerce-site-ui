import { useProductModal } from "../../hooks/useProductModal";
import Modal from "react-modal";
import styles from "./ProductModal.module.scss";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "75%",
    borderRadius: 25,
  },
};

export const ProductModal = () => {
  const { product, isModalOpen, handleToggleModal } = useProductModal();

  return (
    <Modal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={() => {
        handleToggleModal({ isOpen: false, product: null });
      }}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/images/product.jpg" alt="product" fill />
        </div>
        <div className={styles.productContainer}>
          <h2>{product?.productName}</h2>
          <div>
            <p>{product?.price}</p>
            <p>{product?.oldPrice}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
