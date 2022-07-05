import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import CustomInput from '../UI/Input/CustomInput';
import Modal from '../UI/Modal/Modal';
import styles from './Form.module.css';

const UserForm = () =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState([]);

    const onNameChangeHandler = (value) =>{       
        setName(value);
    }
    const onAgeChangeHandler = (value) =>{
        setAge(value);
    }

    const addHandler = (e)=>{
       
    }
    //    } else{
    //     console.log(name, age);
    //         setUser((prev)=>{
    //             return [
    //                 {'id':Math.random(), 'userName': name, 'age': age},
    //                 ...prev]
    //             })
    //         setName('');
    //         setAge('');
    //     }

    // }
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        setErrorMessage('');
        setHasError(false);
       if(name.trim().length === 0){
        setErrorMessage('Name field can not be empty');
        setHasError(true);
        return;
       }else if(name.trim().length === 0){
        setErrorMessage('Name can not be empty');
        setHasError(true);
        return;
       }
       else if(parseInt(age) < 0){
        setHasError(true);
        setErrorMessage('Age can not be negetive');
       }else if(age.trim().length === 0){
        setErrorMessage('Age can not be empty');
        setHasError(true);
        return;
       }
        else{
            console.log(name, age);
            setUser((prev)=>{
                return [
                    {'id':Math.random(), 'userName': name, 'age': age},
                    ...prev]
            })
            setName('');
            setAge('');

        }
        
    }

    const onCloseHandler = (isOpen) =>{
        console.log(111, isOpen)
        setHasError(!isOpen)
    }

    return(
        <div className='avaya'>
            {hasError && <Modal messages={errorMessage} onClose={onCloseHandler}></Modal>}
            <Card>
                <form onSubmit={formSubmitHandler}>
                    <div className={styles['form-group']}>
                    {/* <p className={styles.error}>{nameError.message}</p> */}

                        <CustomInput type="text" name="userName" value={name} onChange={onNameChangeHandler} label="User Name" />
                    </div>
                    <div className={styles['form-group']}>
                        {/* <p className={styles.error}>{ageError.message}</p> */}
                        <CustomInput type="number" name="age" value={age}  onChange={onAgeChangeHandler} label="Age" />
                    </div>
                    <div className={styles['form-group']}>
                        <Button  type="submit" >Add</Button>
                    </div>
                </form>
            </Card>
            {user.length>0 && (<Card>
                {user.map((usr)=>{
                    return (
                        <div key={usr.id} className={styles.item}>
                            <p >{usr.userName}</p>
                            <p >{usr.age}</p>
                        </div>
                    )        
                })}
            </Card>)}
        </div>
    )
}


export default UserForm;