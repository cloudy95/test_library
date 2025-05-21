const formaterNumdocument = (value: string):string => {
    let formattedValue = value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
    
    const parts = formattedValue.split('-');
    if (parts.length > 1) {
        formattedValue = `${parts[0]}-${parts.slice(1).join('')}`;
    }
    
    if (formattedValue.length > 4 && !formattedValue.includes('-')) {
        formattedValue = `${formattedValue.substring(0, 4)}-${formattedValue.substring(4)}`;
    }
    
    const hyphenIndex = formattedValue.indexOf('-');
    if (hyphenIndex > -1 && hyphenIndex > 4) {
        const cleanValue = formattedValue.replace(/-/g, '');
        formattedValue = `${cleanValue.substring(0, 4)}-${cleanValue.substring(4)}`;
    } else if (hyphenIndex === -1 && formattedValue.length > 4) {
        formattedValue = `${formattedValue.substring(0, 4)}-${formattedValue.substring(4)}`;
    }
    
    return formattedValue;
}

export const formaterNumberDocument:any = {
    'pe':(value = '')=>{
        return formaterNumdocument(value);
    },
    'cl':(value = '')=>{
        return value
    },
    '':(value = '')=>{
        return value
    }
}

