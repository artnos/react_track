import React, {useRef, useState, useEffect} from 'react';

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

// Hook

//TODO: experiment with refactoring this

// function useHover(setDropdown) {
//     const [value, setValue] = useState(false);
//
//     const ref = useRef(null);
//
//     const handleMouseOver = () => { setValue(true,);
//     setDropdown("show")  };
//
//     const handleMouseOut = () => { setValue(false,);
//     setDropdown("")  };
//
//     useEffect(
//         () => {
//             const node = ref.current;
//             if (node) {
//                 node.addEventListener('mouseover', handleMouseOver);
//                 node.addEventListener('mouseout', handleMouseOut);
//
//                 return () => {
//                     node.removeEventListener('mouseover', handleMouseOver);
//                     node.removeEventListener('mouseout', handleMouseOut);
//                 };
//             }
//         },
//         [ref.current] // Recall only if ref changes
//     );
//
//     return [ref, value];
// }


function Dropdown({children, data, dropdown, setDropdown, activeInput, setActiveInput}){
    //const [hoverRef, isHovered] = useHover(setDropdown);

    function handleOnChange(index){
        const activeInputCopy = [...activeInput];
        if( activeInput.indexOf( data[index] ) !== -1){
            let targetIndex = activeInput.indexOf(data[index]);
            //console.log('i am removing at index: ', index, 'value:', data[index]);
            activeInputCopy.splice(targetIndex, 1);
        }else{
            activeInputCopy.push(data[index]);
        }

        setActiveInput(activeInputCopy);
    }

    // useEffect(()=>{
    //     console.log('i am detecing hovering');
    //
    //     if(isHovered){
    //         setDropdown("show");
    //     } else {
    //         setDropdown("");
    //     }
    //
    // }, [isHovered])

    function inputClear(length) {
        setActiveInput([]);
        setDropdown("");

    }

    //console.log('i am data',data);
    if(data === null || data instanceof Error ){
        return (<div>Loading...</div>)
    }
    return (
        <div className="box" >
            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle"
                        onClick={() => setDropdown(dropdown === "" ? "show" : "")}
                        type="button">
                    {children}
                    {/*{isHovered ? ' yes ' : ' no '}*/}
                </button>
                <div className={`dropdown-menu ${dropdown}`}  >
                    {
                        data.map(function (t, tIndex) {
                            let Checked;
                            if( activeInput.indexOf(t) !== -1){
                                Checked = 'checked'
                            }else{
                                Checked = '';
                            }
                                return <div key={t} onClick={() => handleOnChange(tIndex)}><Checkbox
                                    onChange={() => handleOnChange(tIndex)}
                                    checked={Checked}
                                /><label> {t.replace("_", " ")}</label></div>


                        })
                    }
                    <button onClick={() => inputClear(3)}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Dropdown;

