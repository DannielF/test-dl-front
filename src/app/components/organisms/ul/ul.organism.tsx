import ListMolecule from '../../molecules/list/list.molecule';

export default function UlOrganism() {
  return (
    <ul className="nav nav-pills flex-column mb-auto mt-4 list-group list-group-flush">
      <ListMolecule anchorName="List user" routerPath="list-users" />
      <ListMolecule anchorName="Get by id" routerPath="get-one" />
      <ListMolecule anchorName="Get by document" routerPath="get-document" />
      <ListMolecule anchorName="Get by email" routerPath="get-email" />
      <ListMolecule anchorName="Create user" routerPath="create-user" />
      <ListMolecule anchorName="Add user rol" routerPath="add-rol" />
      <ListMolecule anchorName="Update user" routerPath="update-user" />
      <ListMolecule anchorName="Delete user" routerPath="delete-user" />
    </ul>
  );
}
