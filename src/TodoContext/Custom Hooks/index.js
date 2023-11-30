import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      try {
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, []);
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    };

    return {item, saveItem, loading, error};
  }

  function useChangeOrder(sliderTodos, order, searchValue) {
    const [newOrder, setNewOrder] = React.useState([]);
    React.useEffect(() => {
      const searchedTodos = sliderTodos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      switch (order) {
        case 'az':
          setNewOrder(searchedTodos.sort(((a, b) => a.text.localeCompare(b.text))));
          break
        case 'za':
          setNewOrder(searchedTodos.sort((a, b) => b.text.localeCompare(a.text)));
          break
        case 'cp':
          setNewOrder(searchedTodos.sort((a, b) => b.completed - a.completed));
          break
        case 'ncp':
          setNewOrder(searchedTodos.sort((a, b) => a.completed - b.completed));
          break
        case 'pfaa':
          setNewOrder(searchedTodos);
          break
        default:
          setNewOrder(searchedTodos.reverse());
      }
    }, [sliderTodos, searchValue, order]);

    return (newOrder);
  }

  function useSettings(userName, order, appLanguaje, dark) {
    const [userSettings, setUserSettings] = React.useState([order, appLanguaje, dark]);
      React.useEffect(() => {
        const settings = localStorage.getItem(userName);
        let parsedSettings;
        try {
          if (!settings) {
            localStorage.setItem(userName, JSON.stringify([order, appLanguaje, dark]));
            parsedSettings = [order, appLanguaje, dark];
          } else {
            parsedSettings = JSON.parse(settings);
            setUserSettings(parsedSettings);
          }
        } catch (error) {
          console.log('ERROR')
        }
    }, []);
    const saveSettings = (order, appLanguaje, dark) => {
      localStorage.setItem(userName, JSON.stringify([order, appLanguaje, dark]));
      setUserSettings([order, appLanguaje, dark]);
    };

    return {userSettings, saveSettings};
  }

  export { useLocalStorage, useChangeOrder, useSettings };
