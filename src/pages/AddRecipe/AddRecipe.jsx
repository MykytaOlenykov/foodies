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
import { useDropdownLists } from "./useLists.jsx";

const defaultData = {
  image: null,
  title: '',
  description: '',
  category: null,
  cookingTime: 10,
  ingredients: [],
  instructions: '',
}

const IngredientsFieldGroup = ({ ingredientsList, onAdd }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [quantity, setQuantity] = useState('');

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
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
        disabled={!setSelectedIngredient || !quantity}
        onClick={() => {
          onAdd({
            ...selectedIngredient,
            quantity: quantity,
          })
          setSelectedIngredient(null);
          setQuantity('');
        }}
      >
        Add ingredient
      </Button>
    </div>
  )
}

const AddRecipe = () => {
  const { ingredientsList, categoriesList } = useDropdownLists();
  const [data, setData] = useState(defaultData);

  const onSubmit = () => {
    const dataToSend = {
      title: data.title,
      categoryId: data.category.id,
      areaId: null,
      description: data.description,
      instructions: data.instructions,
      time: data.cookingTime,
      ingredients: data.ingredients.map((ingredient) => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
      })),
      thumb: data.image,
    }

    console.log(dataToSend);
  }

  const onImageUpload = (file) => {
    setData({ ...data, image: file });
  };

  const onClear = () => {
    setData(defaultData);
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
          <BreadcrumbsItem isActive>
            Add recipe
          </BreadcrumbsItem>
        </Breadcrumbs>

        <div className={styles.AddRecipe__header}>
          <Typography variant="h2">
              Add recipe
            </Typography>
            <Typography variant="body">
              Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us.
            </Typography>
        </div>

        <form className={styles.AddRecipe__form}>
          <ImageUpload onUpload={onImageUpload} />

          <div className={styles.AddRecipe__inputs}>
            <div className={styles.AddRecipe__inputGroup_top}>
              <Input
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                variant="ghost"
                placeholder="The name of the recipe"
              />
              <Textarea
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
                placeholder="Enter a description of the dish"
              />
            </div>

            <div className={styles.AddRecipe__inputGroupWrapper}>
            <div className={styles.AddRecipe__inputGroup}>
              <Typography variant="h4">
                Category
              </Typography>
              <SearchSelect
                items={categoriesList}
                onSelect={(item) => setData({ ...data, category: item })}
                placeholder="Select a category"
              />
            </div>

            <div className={styles.AddRecipe__inputGroup}>
              <Typography variant="h4">
                Cooking time
              </Typography>
              <InputStepper
                value={data.cookingTime}
                onChange={(value) => setData({ ...data, cookingTime: value })}
              />
            </div>
            </div>

            <IngredientsFieldGroup
              ingredientsList={ingredientsList}
              onAdd={(newData) => {
                setData((prev) => ({
                  ...prev,
                  ingredients: [...prev.ingredients, newData],
                }));
              }}
            />

            {data.ingredients.length > 0 && (
              <div className={styles.AddRecipe__ingredientsList}>
                {data.ingredients.map((ingredient) => (
                  <IngredientBadge
                    imgURL={ingredient.imgURL}
                    name={ingredient.name}
                    measure={ingredient.quantity}
                    key={ingredient.id}
                    onDelete={() => {
                      setData((prev) => ({
                        ...prev,
                        ingredients: prev.ingredients.filter((i) => i.id !== ingredient.id),
                      }));
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
              <Textarea
                value={data.instructions}
                onChange={(e) => setData({ ...data, instructions: e.target.value })}
                placeholder="Enter recipe"
              />
            </div>

            <div className={styles.AddRecipe__actions}>
              <ButtonIcon
                icon={<TrashIcon />}
                variant="light"
                size="large"
                type="button"
                onClick={onClear}
              />
              <Button
                className={styles.AddRecipe__publishBtn}
                variant="dark"
                size="small"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                Publish
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AddRecipe
