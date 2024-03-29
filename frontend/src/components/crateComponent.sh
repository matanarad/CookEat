#!/bin/bash

# Create placeholder folder if it doesn't exist
read -p "Enter the content for placeholder.jsx: " placeholder_parm

mkdir -p "$placeholder_parm"
touch "$placeholder_parm"/"$placeholder_parm".css
# Read user input for the placeholder content

echo "import './$placeholder_parm.css';

function $placeholder_parm() {
    return (
        <div className=\"$placeholder_parm\">

        </div>
    );
}

export default $placeholder_parm;
" > $placeholder_parm/$placeholder_parm.jsx




# Print a message indicating successful creation
echo "Files created successfully."
