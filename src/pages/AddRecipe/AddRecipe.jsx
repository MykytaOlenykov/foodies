import Container from "../../components/UI/Container/Container.jsx";
import { Typography } from "../../components/Typography/Typography.jsx";
import * as styles from "./AddRecipe.module.css";
import { Breadcrumbs, BreadcrumbsDivider, BreadcrumbsItem } from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { ImageUpload } from "../../components/ImageUpload/ImageUpload.jsx";
import Input from "../../components/Input/Input.jsx";
import { Textarea } from "../../components/Textarea/Textarea.jsx";
import { useState } from "react";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon.jsx";
import TrashIcon from "../../assets/icons/trash.svg?react";
import { Button } from "../../components/Button/Button.jsx";
import SearchSelect from "../../components/SearchSelect/SearchSelect.jsx";
import { InputStepper } from "../../components/InputStepper/InputStepper.jsx";
import PlusIcon from "../../assets/icons/plus.svg?react";
import clsx from "clsx";
import { IngredientBadge } from "../../components/IngredientBadge/IngredientBadge.jsx";
import { useSelector } from "react-redux";
import { selectIngredients } from "../../store/ingredients/index.js";
import { selectCategories } from "../../store/categories/index.js";
import { selectAreas } from "../../store/areas/index.js";
import { object, string } from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import api from "../../services/api.js";

const IngredientsFieldGroup = ({ ingredientsList, onAdd }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [measure, setMeasure] = useState("");

  return (
    <div className={styles.IngredientsFieldGroup}>
      <div className={styles.AddRecipe__inputGroupWrapper}>
        <div className={styles.AddRecipe__inputGroup}>
          <Typography variant="h4">
            Ingredients
          </Typography>
          <SearchSelect
            items={ingredientsList}
            onSelect={(item) => setSelectedIngredient(item)}
            placeholder="Add the ingredient"
          />
        </div>
        <Input
          value={measure}
          onChange={(e) => setMeasure(e.target.value)}
          variant="underline"
          placeholder="Enter quantity"
        />
      </div>

      <Button
        className={styles.IngredientsFieldGroup__button}
        variant="light"
        bordered
        size="medium"
        icon={<PlusIcon />}
        disabled={!setSelectedIngredient || !measure}
        onClick={() => {
          onAdd({
            ...selectedIngredient,
            measure: measure,
          });
          setSelectedIngredient(null);
          setMeasure("");
        }}
      >
        Add ingredient
      </Button>
    </div>
  );
};

const defaultData = {
  image: null,
  title: "",
  description: "",
  category: null,
  area: null,
  cookingTime: 10,
  ingredients: [],
  instructions: "",
};

const validationSchema = object({
  title: string().required("Recipe title is required"),
  description: string().required("Description is required"),
  category: object().required("Category is required"),
  area: object().required("Area is required"),
  instructions: string().required("Instructions are required"),
});

const AddRecipe = () => {
  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);
  const areasList = useSelector(selectAreas);

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setSubmitting(true);

    const formData = new FormData();

    formData.append("file", values.image);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("categoryId", values.category.id);
    formData.append("areaId", values.area.id);
    formData.append("time", values.cookingTime.toString());
    formData.append("instructions", values.instructions);

    values.ingredients.forEach((ing, i) => {
      formData.append(`ingredients[${i}][id]`,    ing.id);
      formData.append(`ingredients[${i}][measure]`, ing.measure);
    });

    try {
      await api.post("/recipes", formData);
      resetForm();
      setStatus({ success: true });
    } catch (err) {
      console.error("Error creating recipe:", err);
      setStatus({ error: "Failed to create recipe. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Container>
      <div className={styles.AddRecipe}>
        <Breadcrumbs>
          <BreadcrumbsItem onClick={() => {
            window.open("/", "_self");
          }}>
            Home
          </BreadcrumbsItem>
          <BreadcrumbsDivider />
          <BreadcrumbsItem isActive>Add recipe</BreadcrumbsItem>
        </Breadcrumbs>

        <div className={styles.AddRecipe__header}>
          <Typography variant="h2">
            Add recipe
          </Typography>
          <Typography variant="body">
            Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us.
          </Typography>
        </div>

        <Formik
          initialValues={defaultData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, values, resetForm, isSubmitting }) => (
            <Form className={styles.AddRecipe__form}>
              <ImageUpload onUpload={(file) => setFieldValue('image', file)} />

              <div className={styles.AddRecipe__inputs}>
                <div className={styles.AddRecipe__inputGroup_top}>
                  <div>
                    <Field
                      name="title"
                      as={Input}
                      variant="ghost"
                      placeholder="The name of the recipe"
                    />
                    <ErrorMessage name="title" component="div" className={styles.errorMessage} />
                  </div>

                  <div>
                    <Field
                      name="description"
                      as={Textarea}
                      placeholder="Enter a description of the dish"
                    />
                    <ErrorMessage name="description" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.AddRecipe__inputGroup}>
                  <Typography variant="h4">
                    Area
                  </Typography>
                  <div>
                    <Field
                      name="area"
                      render={({ field }) => (
                        <SearchSelect
                          {...field}
                          items={areasList}
                          onSelect={(item) => setFieldValue("area", item)}
                          placeholder="Select an area"
                        />
                      )}
                    />
                    <ErrorMessage name="area" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.AddRecipe__inputGroupWrapper}>
                  <div className={styles.AddRecipe__inputGroup}>
                    <Typography variant="h4">
                      Category
                    </Typography>
                    <div>
                      <Field
                        name="category"
                        render={({ field }) => (
                          <SearchSelect
                            {...field}
                            items={categoriesList}
                            onSelect={(item) => setFieldValue("category", item)}
                            placeholder="Select a category"
                          />
                        )}
                      />
                      <ErrorMessage name="category" component="div" className={styles.errorMessage} />
                    </div>
                  </div>

                  <div className={styles.AddRecipe__inputGroup}>
                    <Typography variant="h4">
                      Cooking time
                    </Typography>
                    <Field
                      name="cookingTime"
                      component={InputStepper}
                      value={values.cookingTime}
                      onChange={(value) => setFieldValue("cookingTime", value)}
                    />
                  </div>
                </div>

                <IngredientsFieldGroup
                  ingredientsList={ingredientsList}
                  onAdd={(newData) => {
                    setFieldValue("ingredients", [...values.ingredients, newData]);
                  }}
                />

                {values.ingredients.length > 0 && (
                  <div className={styles.AddRecipe__ingredientsList}>
                    {values.ingredients.map((ingredient) => (
                      <IngredientBadge
                        imgURL={ingredient.imgURL}
                        name={ingredient.name}
                        measure={ingredient.measure}
                        key={ingredient.id}
                        onDelete={() => {
                          setFieldValue(
                            "ingredients",
                            values.ingredients.filter((i) => i.id !== ingredient.id)
                          );
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className={clsx(
                  styles.AddRecipe__inputGroup,
                  styles.AddRecipe__inputGroup_bottom,
                )}>
                  <Typography variant="h4">
                    Recipe Preparation
                  </Typography>
                  <div>
                    <Field
                      name="instructions"
                      as={Textarea}
                      placeholder="Enter recipe"
                    />
                    <ErrorMessage name="instructions" component="div" className={styles.errorMessage} />
                  </div>
                </div>

                <div className={styles.AddRecipe__actions}>
                  <ButtonIcon
                    icon={<TrashIcon />}
                    variant="light"
                    size="large"
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      resetForm();
                    }}
                  />
                  <Button
                    className={styles.AddRecipe__publishBtn}
                    variant="dark"
                    size="small"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Publish
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default AddRecipe;


