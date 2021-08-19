import React from "react";
import CollectionItem from "../colection-item/collection-item";
import "./collection-preview-styles.scss";

const CollectionPreview = ({title , items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.filter((item , id) => id < 4).map(({id , ...otheritemprops}) => (
              <CollectionItem key={id} {...otheritemprops}/>
          ))}
        </div>
    </div>
)

export default CollectionPreview; 
