import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const UsersProfile = () => {
  const [image, setImage] = React.useState<string>('');

  React.useEffect(() => {
    fetch('https://random.imagecdn.app/200/200').then((data) =>
      setImage(data.url),
    );
  }, []);

  return (
    <div className="mt-5">
      {image ? (
        <img src={image} className="rounded" alt="random image" />
      ) : (
        <Skeleton height={200} width={200} />
      )}
    </div>
  );
};
