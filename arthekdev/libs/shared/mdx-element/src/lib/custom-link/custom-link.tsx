import styles from './custom-link.module.css';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}

export function CustomLink({as, href, ...otherProps}}: CustomLinkProps) {
  return (
    <div className={styles['container']}>
      <a className='bg-yellow-100' {...otherProps}/>
    </div>
  );
}

export default CustomLink;
