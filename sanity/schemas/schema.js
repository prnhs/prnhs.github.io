// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { FaCog, FaBook, FaUser, FaHeart } from 'react-icons/lib/fa'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: 'Settings',
      name: 'settings',
      type: 'document',
      icon: FaCog,
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Root URL',
          name: 'rooturl',
          type: 'string'
        },
        {
          title: 'Logo',
          name: 'logo',
          type: 'image'
        },
        {
          title: 'Cover Image',
          name: 'coverimage',
          type: 'image'
        }
      ]
    },
    {
      title: 'Volunteer Opportunities',
      name: 'opportunities',
      type: 'document',
      icon: FaHeart,
      fields: [
        {
          title: 'Opportunity Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Opportunity Description',
          name: 'description',
          type: 'string'
        },
        {
          title: 'In School',
          name: 'inschool',
          type: 'boolean'
        },
        {
          title: 'Date and Time',
          name: 'datetime',
          type: 'datetime',
          options: {
            timeFormat: 'h:mma'
          }
        },
        {
          title: 'Contact Email (optional)',
          name: 'email',
          type: 'string'
        },
        {
          title: 'Link (optional)',
          name: 'link',
          type: 'string'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title'
          }
        },
      ],
      initialValue: {
        inschool: false
      }
    },
    {
      title: 'Pages',
      name: 'pages',
      type: 'document',
      icon: FaBook,
      fields: [
        {
          title: 'Page Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Page Content',
          name: 'content',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          title: 'Page Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title'
          }
        },
        {
          title: 'Page Cover Image (optional)',
          name: 'coverimage',
          type: 'image'
        },
        {
          title: 'Active Alert',
          name: 'alert',
          type: 'boolean'
        }
      ],
      initialValue: {
        alert: false
      }
    },
    {
      title: 'Board Members',
      name: 'boardmembers',
      type: 'document',
      icon: FaUser,
      fields: [
        {
          title: 'Board Member Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Board Member Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Contact Email',
          name: 'email',
          type: 'string'
        }
      ]
    },
    {
      title: 'Faculty Sponsors',
      name: 'facultysponsors',
      type: 'document',
      icon: FaUser,
      fields: [
        {
          title: 'Sponsor Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Contact Email',
          name: 'email',
          type: 'string'
        }
      ]
    },
    {
      title: 'Students',
      name: 'students',
      type: 'document',
      icon: FaUser,
      fields: [
        {
          title: 'Student Name',
          name: 'name',
          type: 'string'
        },
        {
          title: 'Graduation Year',
          name: 'graduationyear',
          type: 'string'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name'
          }
        },
        {
          title: 'Blood Drive Registration Totals',
          name: 'blooddrivetotals',
          type: 'number'
        },
        {
          title: 'In-school Volunteer Hours (1st Semester)',
          name: 'finvolunteerhours',
          type: 'number'
        },
        {
          title: 'Out-of-school Volunteer Hours (1st Semester)',
          name: 'foutvolunteerhours',
          type: 'number'
        },
        {
          title: 'In-school Volunteer Hours (2nd Semester)',
          name: 'sinvolunteerhours',
          type: 'number'
        },
        {
          title: 'Out-of-school Volunteer Hours (2nd Semester)',
          name: 'soutvolunteerhours',
          type: 'number'
        }
      ],
      initialValue: {
        blooddrivetotals: 0,
        finvolunteerhours: 0,
        foutvolunteerhours: 0,
        sinvolunteerhours: 0,
        soutvolunteerhours: 0,
        graduationyear: new Date().getFullYear() + 3
      }
    }
  ])
})
