export type AnchorAtomProps = {
  anchorName: string;
};

export default function AnchorAtom({ anchorName }: AnchorAtomProps) {
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      data-bcup-haslogintext="no"
    >
      <span className="fs-4 badge text-bg-primary">{anchorName}</span>
    </a>
  );
}
