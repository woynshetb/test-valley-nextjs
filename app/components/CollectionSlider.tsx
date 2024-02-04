"use client";
import { fetchCollectionsBySingleTypeAndViewTypeTile } from '../services/api';
import { APIResponse, Item } from '../services/model/collections_response';
import React, { useEffect, useState } from 'react';
import CollectionItem  from "./CollectionItem"
const CollectionsSlider = () => {
  const [collections, setCollections] = useState<Item[]>([]);
  const [apiResponse, setApiResponse] = useState<APIResponse>();

  useEffect(() => {
    fetchCollectionsData();
  }, []);

  const fetchCollectionsData = async () => {
    try {
      const response = await fetchCollectionsBySingleTypeAndViewTypeTile();
      setApiResponse((response));
     
      if (response && response.items) {
        setCollections(response.items.filter(item => item.items.length > 0));
  }
    } catch (error) {
      console.error('Error fetching collections:', error);
    }
  };

  return (
    <div className='collectionsContainer '>
      {collections.map((collection)=>(
        <CollectionItem key={collection.id} {...collection}/>
      ))}
    </div>
  );
};

export default CollectionsSlider;
