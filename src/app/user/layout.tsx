import styles from './layout.module.css';
import SidebarTemplate from '@/app/components/templates/sidebar/sidebar.template';

export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.main}>
      <SidebarTemplate />
      {children}
    </section>
  );
}
