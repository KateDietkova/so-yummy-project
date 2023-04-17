import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { TabsList, Tab } from "./CategoriesTabs.styled";

const CategoriesTabs = ({ items = [] }) => {
    const ref = useRef(); 
    const { events } = useDraggable(ref);

    return (
         <TabsList  {...events} ref={ref}>
            {items.map(category => (
                <Tab to={`/categories/${category.toLowerCase()}`} key={category}>{category }</Tab>
            ))}

    </TabsList>
)
}

export default CategoriesTabs;