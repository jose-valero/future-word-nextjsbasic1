import { createElement, HTMLAttributes } from 'react';
import sanitize from 'sanitize-html';

type SanitazeHTMLProps = {
  tag: string;
  children: string;
} & HTMLAttributes<HTMLElement>;

export const SanitazeHTML = ({ children, tag, ...rest }: SanitazeHTMLProps) => {
  const sanitazeHTML = sanitize(children, {
    /** estas etiquetas son las que dejamos que pasen, si queremos por ejemplo
     * renderizar un <p> que venga del servidor entonces no lo agregamos y le mandamos este padre
     * igual pendiente con esto que no deberiamos dejar pasar nada por temas de seguridad
     */
    allowedTags: ['b', 'i', 'em', 'strong']
  });

  return createElement(tag, { ...rest }, sanitazeHTML);
};
