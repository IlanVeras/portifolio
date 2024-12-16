import React, { useEffect, useState } from 'react';
import styles from "./SitePreview.module.css"

export default function SiteScreenshot({imagem}) {
    return (
      <div className={styles.container}>
        <img src={imagem}></img>
      </div>
    );
  }
