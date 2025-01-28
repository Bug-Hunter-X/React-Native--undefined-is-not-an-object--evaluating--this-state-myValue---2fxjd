```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [myValue, setMyValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setMyValue(data.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{myValue}</Text>
    </View>
  );
};

export default MyComponent;
```