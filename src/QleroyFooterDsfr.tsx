/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import { QleroyFooterDsfrProps, QleroyFooterDsfrStylesProps } from './types';

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

const Styles = styled.div<QleroyFooterDsfrStylesProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default function QleroyFooterDsfr(props: QleroyFooterDsfrProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { data, height, width, footerDescription } = props;

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  });

  console.log('Plugin props', props);

  return (
    <Styles
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
    >
      <footer className="fr-footer" role="contentinfo" id="footer">
        <div className="fr-container">
          <div className="fr-footer__body">
            <div className="fr-footer__brand fr-enlarge-link">
              <a href="/" title="Retour à l’accueil du site">
                <p className="fr-logo">
                  Intitulé
                  <br></br>officiel
                </p>
              </a>
            </div>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">{footerDescription}</p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre" href="https://gouvernement.fr">gouvernement.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre" href="https://service-public.fr">service-public.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre" href="https://data.gouv.fr">data.gouv.fr</a>
              </li>
            </ul>
          </div>
          <div className="fr-footer__bottom">
            <ul className="fr-footer__bottom-list">
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="#">Plan du site</a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="#">Accessibilité : non/partiellement/totalement conforme</a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="#">Mentions légales</a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="#">Données personnelles</a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="#">Gestion des cookies</a>
              </li>
            </ul>
            <div className="fr-footer__bottom-copy">
              <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre">licence etalab-2.0</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Styles>
  );
}
