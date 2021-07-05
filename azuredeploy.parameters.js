    {
        "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
        "contentVersion": "1.0.0.0",
        "parameters": {
            "name": {
                "value": "myfirstswadeployment"
            },
            "location": {
            "type": "string",
            "defaultValue": "Central US"
            },   
            "sku": {
                "value": "Free"
            },
            "skucode": {
                "value": "Free"
            },
            "repositoryUrl": {
                "value": "https://github.com/luisrivasnoriega/Resume"
            },
            "branch": {
                "value": "main"
            },
            "repositoryToken": {
                "value": "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" 
            },
            "appLocation": {
                "value": "/"
            },
            "apiLocation": {
                "value": ""
            },
            "appArtifactLocation": {
                "value": "public"
            },
            "resourceTags": {
                "value": {
                    "Environment": "Development",
                    "Project": "Testing SWA with ARM",
                    "ApplicationName": "myfirstswadeployment"
                }
            }
        }
    }