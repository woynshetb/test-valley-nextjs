const HorizontalListItem = ({ title, imageUrl, linkUrl }) => {
    return (
      <div className="horizontal-list-item">
        <img src={imageUrl} alt={title} className="item-image" />
          <h3 className="shortcut-title">{title}</h3>
      </div>
    );
  };

  export default HorizontalListItem