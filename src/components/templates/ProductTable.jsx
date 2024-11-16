import React from 'react'
import { useState } from 'react';
import styles from "./ProductTable.module.css"
import { useGetAllProducts } from '../../services/queries';
import Loader from "../../components/modules/Loader";
import { e2p, sp } from "../../utils/replaceNumber";

function ProductTable() {
     const [page, setPage] = useState(1);
     const { data, error, isLoading } = useGetAllProducts(page);
     console.log(data)
  return (
    <>
      <div className={styles.products_container}>
        <div className={styles.products_navbar}>
          <div className={styles.search_box}>
            <img src="/search.svg" alt="search" />
            <input type="text" placeholder="جستجو کالا" />
          </div>
          <div className={styles.profile_info}>
            <img src="/profile.jpg" alt="profile" />
            <div>
              <p>میلاد عظمی</p>
              <span>مدیر</span>
            </div>
          </div>
        </div>

        <p className={styles.search_error}>
          لطفاً حداقل ۳ کاراکتر وارد کنید."{" "}
        </p>

        <div className={styles.products_header}>
          <div>
            <img src="/setting.svg" alt="setting" />
            <span>مدیریت کالا</span>
          </div>
          <button>افزودن محصول</button>
        </div>
        <table className={styles.products_table}>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th colSpan="2">شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           
            {isLoading ? (
              <tr>
                <td colSpan="6">
                  <Loader />
                </td>
              </tr>
            ) : data?.data.data.length ? (
              data.data.data.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{sp(product.quantity)}</td>
                  <td>{sp(product.price)} تومان</td>
                  <td colSpan="2">{e2p(product.id)}</td>
                  <td>
                    <img
                      src="edit.svg"
                      alt="ویرایش"
                      style={{ marginLeft: "14px" }}
                    //   onClick={() => openModalHandler("edit", product.id)}
                    />
                    <img
                      src="trash.svg"
                      alt="حذف"
                    //   onClick={() => openModalHandler("delete", product.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.no_products}>
                  محصولی یافت نشد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}></div>
    </>
  );
}

export default ProductTable