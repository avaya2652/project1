import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import CustomInput from '../UI/Input/CustomInput';
import Modal from '../UI/Modal/Modal';
import styles from './Form.module.css';

const Form = () =>{
    const [name, setName] = useState('');
    const[nameError, setNameError] = useState({message:'', hasNameError: false});
    const [age, setAge] = useState('');
    const[ageError, setAgeError] = useState({message:'', hasAgeError: false});

    const [user, setUser] = useState([]);

    const onNameChangeHandler = (value) =>{

        setNameError({message:'', hasNameError: false});
        if(value <0){
            setNameError({message:'Name cant be negetive', hasNameError: true});
            return;
        }
        
        setName(value);
    }
    const onAgeChangeHandler = (value) =>{
        setAgeError({message:'', hasAgeError: false});
        if(value <0){
            setAgeError({message:'Age cant be negetive', hasAgeError: true});
            return;
        }
        
        setAge(value);

    }

    const addHandler = (e)=>{
        // if(ha)
        if(age.trim().length === 0){
            setAgeError({message:'Age cant be empty', hasAgeError: true});
            if(name.trim().length === 0){
                setNameError({message:'Name cant be empty', hasNameError: true});
                // return;
            }
            return;
        }
        setUser((prevState)=>{
            return[{'userName':name, 'age':age, 'id':Math.random()}, ...prevState]
        })

        setAge('');
        setName('');
    }

    return(
        <div className='avaya'>
            <Modal></Modal>
            <Card>
                <div className={styles['form-group']}>
                <p className={styles.error}>{nameError.message}</p>

                    <CustomInput type="text" name="userName" value={name} onChange={onNameChangeHandler} label="User Name" />
                </div>
                <div className={styles['form-group']}>
                    <p className={styles.error}>{ageError.message}</p>
                    <CustomInput type="number" name="age" value={age}  onChange={onAgeChangeHandler} label="Age" className={`${ageError.hasAgeError? 'error':''}`}/>
                </div>
                <div className={styles['form-group']}>
                    <Button onClick={addHandler} >Add</Button>
                </div>
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

export default Form;