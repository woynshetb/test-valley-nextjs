"use client";
import React, { useEffect, useState } from 'react';
import Shortcut from '../services/model/shortcut';
import { fetchShortCut } from '../services/api';
import HorizontalListItem from "./HorizontalItem"
const ShortcutSlider = () => {
    const [shortCuts, setShortcuts] = useState<Shortcut[]>([]);
    useEffect(() => {
        fetchShortcutData();
      }, []);
    
      const fetchShortcutData = async () => {
        try {
          const response = await fetchShortCut();
          setShortcuts(response);
        } catch (error) {
          console.error('Error fetching banners:', error);
        }
      };
    
      const getImageUrl = (banner: Shortcut | undefined) => {
        return banner?.linkUrl || '';
      };
    return(
        <div className="horizontal-list-container ">
        {shortCuts.map((shortcut) => (
          <HorizontalListItem key={shortcut.mainShortcutId} {...shortcut} />
        ))}
      </div>
    );
};

export default ShortcutSlider

