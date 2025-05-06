import { Link } from "react-router";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import css from "./CategoryItem.module.css";
import { ArrowUpRight } from "lucide-react";

export default function CategoryItem({ data }) {
  return (
    <>
      <div className={`${css.thumb} ${css[data.name.toLowerCase()]}`}>
        <div className={css.wrapper}>
          <p className={css.label}>{data.name}</p>
          <Link to={`/category/${data.id}`}>
            <ButtonIcon
              className={css.btnIcn}
              size="medium"
              type="button"
              icon={<ArrowUpRight />}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
