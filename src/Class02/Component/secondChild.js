import ThirdChild from './thirdChild'
import Button from './Button'
function secondChild(){
    return(
    <div>
        I'm secondChild
        <ThirdChild/>
        <Button color="green" title="HTML LEARN"/>
    </div>
    )
}

export default secondChild