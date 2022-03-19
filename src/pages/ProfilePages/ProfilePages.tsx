const ProfilePages = () => {
  const getAllDataUser =
    localStorage.getItem('user');

  const parseData = (data: string | null) => {
    return JSON.parse(data as string);
  };

  return (
    <div>
      <h1>Profile </h1>

      <p>Nama</p>
      <p>{parseData(getAllDataUser).name}</p>
      <p>Email</p>
      <p>{parseData(getAllDataUser).email}</p>
      <p>Phone Number</p>
      <p>
        {parseData(getAllDataUser).phone_number}
      </p>
    </div>
  );
};

export default ProfilePages;
