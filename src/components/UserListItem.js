import React from 'react';
import { Card, Button} from 'antd';
import { useDispatch } from 'react-redux';
import { deleteUserRequest } from '../actions/users';
import ConfirmDialog from './ConfirmDialog';
import useDisclosure from '../hooks/useDisclosure';

const UserListItem = ({ user, onEditUser }) => {
  const dispatch = useDispatch();

  const { isOpen: isDialogOpen,open: showDialog,  close: closeDialog } = useDisclosure();

  const handleDelete = () => {
    dispatch(deleteUserRequest(user.id));
  };

  const handleDeleteClick = () => {
    showDialog();
};

const handleConfirmDelete = () => {
    handleDelete(user.id);
    closeDialog();
};


  const stringToHslColor = (str = '') => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };
  const getInitials = (firstName, lastName) => {
    return firstName && lastName ? `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}` : '';
  };
  if (!user || !user.firstName || !user.lastName) {
    return <div style={{ color: 'red' }}>Invalid user data</div>; // Display a message if user data is incomplete or missing
  }

  return (
    <Card className="user-item" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
        margin: 'auto 0',
        textAlign: 'center',
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        borderRadius: '50%',
        color: 'white',
        fontWeight: 'bold',
        background: stringToHslColor(user.firstName + user.lastName)}}>
            {getInitials(user.firstName, user.lastName)}
        {!!user && !!user.firstName && !!user.lastName ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase() : ''}
      </div>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>
        <Button type="primary" onClick={() => onEditUser(user.id)} style={{ marginRight: '10px' }}>
          Edit
        </Button>
        <Button type="primary" danger onClick={handleDeleteClick}>
          Delete
        </Button>
        <ConfirmDialog
          isOpen={isDialogOpen}
          onConfirm={handleConfirmDelete}
          onCancel={closeDialog}
          message={`Are you sure you want to delete ${user.firstName} ${user.lastName}?`}/>
      </div>
    </Card>
  );
};

export default UserListItem;
