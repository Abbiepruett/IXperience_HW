import React, { useEffect, useState } from "react";

import Navbar from "../../Navbar";
import Heading from "../../Heading";
import CategoryList from "../../CategoriesList";
// import Footer from "../../components/Footer";

import SuccessToast from "../../SuccessToast";
import ErrorToast from "../../ErrorToast";
import DeleteCategoryModal from "../../deleteCategoryModal";
import AddEditCategoryModal from "../../addEditCategoryModal";
import Loading from "../../Loading";
import categoryService from "../../../services/categoryService";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState();
  const [editCategory, setEditCategory] = useState();
  const [deleteCategory, setDeleteCategory] = useState();

  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const categoriesRes = await categoryService.fetchCategories();
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onCategoryAdd = () => {
    setAddCategory({
      title: "",
      description: "",
      color: "#000000",
    });
  };

  const onCategoryUpdate = (category) => {
    setEditCategory(category);
  };

  const onCategoryDelete = (category) => {
    setDeleteCategory(category);
  };

  const createCategory = async (category) => {
    try {
      const newCategory = await categoryService.createCategory(category);
      setIsSuccess(true);
      setMessage(newCategory.message);
      setCategories((prev) => {
        return [...prev, newCategory.data];
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddCategory(null);
  };

  const updateCategory = async (category) => {
    try {
      const updatedCategory = await categoryService.updateCategory(category);
      setIsSuccess(true);
      setMessage(updatedCategory.message);
      setCategories((prev) => {
        const index = prev.findIndex((x) => x.id === updatedCategory.data.id);
        prev[index] = updatedCategory.data;
        return prev;
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setEditCategory(null);
  };

  const removeCategory = async (category) => {
    try {
      const newBlog = await categoryService.deleteCategory(category.id);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setCategories((prev) => prev.filter((x) => x.id !== category.id));
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setDeleteCategory(null);
  };

  const AddButton = () => {
    return (
      <button className="btn btn-outline-dark h-75" onClick={onCategoryAdd}>
        ADD CATEGORY
      </button>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Categories</p>
          <AddButton />
        </div>
        <CategoryList
          categories={categories}
          onEdit={onCategoryUpdate}
          onDelete={onCategoryDelete}
        ></CategoryList>
      </div>
      <AddEditCategoryModal
        addCategory={addCategory}
        editCategory={editCategory}
        createCategory={createCategory}
        updateCategory={updateCategory}
        onClose={() => {
          setAddCategory(null);
          setEditCategory(null);
        }}
      />
      <DeleteCategoryModal
        deleteCategory={deleteCategory}
        removeCategory={removeCategory}
        onClose={() => setDeleteCategory(null)}
      />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
          setMessage("");
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
          setMessage("");
        }}
      />
    </>
  );
}