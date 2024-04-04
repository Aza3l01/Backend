const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Detail = require('./detail');
const Aresponsibilities = require('./Aresponsibilities');
const Awards = require('./Awards');
const Laboratory = require('./Laboratory');
const Dresponsibilities = require('./Dresponsibilities');
const Responsibilities = require('./Responsibilities');
const Memberships = require('./Memberships');
const Mou = require('./Mou');
const Research = require('./Research');
const Reviewer = require('./Reviewer');
const Talk = require('./Talk');
const Training = require('./Training');
const Educational = require('./Educational');
const Experience = require('./Experience');
const Links = require('./links');
const National = require('./National');
const Nationaluser = require('./Nationaluser');
const Nationaljournal = require('./Nationaljournal');
const Nationaljournaluser = require('./Nationaljournaluser');
const Internationaljournal = require('./Internationaljournal');
const Internationaljournaluser = require('./Internationaljournaluser');
const Internationalconference = require('./Internationalconference');
const Internationalconferenceuser = require('./Internationalconferenceuser');
const Bookchapter = require('./Bookchapter');
const Bookchapteruser = require('./Bookchapteruser');
const Academicug = require('./Academicug');
const Academicpg = require('./Academicpg');
const Details = require('./Details');
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:nyAV66vyy26KT7Zu@cluster0.ppdntyu.mongodb.net/nitpy?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  app.get('/Training', async (req, res) => {
    try {
      const details = await Training.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Training', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Training({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Training/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Training.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  app.get('/Talk', async (req, res) => {
    try {
      const details = await Talk.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Talk', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Talk({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Talk/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Talk.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  app.get('/Reviewer', async (req, res) => {
    try {
      const details = await Reviewer.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Reviewer', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Reviewer({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Reviewer/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Reviewer.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  app.get('/Research', async (req, res) => {
    try {
      const details = await Research.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Research', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Research({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Research/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Research.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  app.get('/Mou', async (req, res) => {
    try {
      const details = await Mou.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Mou', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Mou({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Mou/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Mou.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




  app.get('/Memberships', async (req, res) => {
    try {
      const details = await Memberships.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Memberships', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Memberships({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Memberships/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Memberships.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



  app.get('/Laboratory', async (req, res) => {
    try {
      const details = await Laboratory.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Laboratory', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Laboratory({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Laboratory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Laboratory.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  app.get('/Aresponsibilities', async (req, res) => {
    try {
      const details = await Aresponsibilities.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Aresponsibilities', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Aresponsibilities({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Aresponsibilities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Aresponsibilities.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Awards', async (req, res) => {
    try {
      const details = await Awards.find(); 
      res.json(details);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post('/Awards', async (req, res) => {
  try {
    const detailData = req.body.researchAreas;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Awards({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        researchAreas: detail.researchAreas,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/Awards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Awards.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const details = await Detail.find(); 
    res.json(details);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/api/users', async (req, res) => {
  try {
    const detailData = req.body.details;
    const savedDetails = [];

    for (const detail of detailData) {
      const newDetail = new Detail({
        _id: detail._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        details: detail.details,
      });

      const savedDetail = await newDetail.save();
      savedDetails.push(savedDetail);
    }

    res.status(201).json(savedDetails);
  } catch (error) {
    console.error('Error saving details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Detail.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.get('/api/Dresponsibilities', async (req, res) => {
  try {
    
    const dresponsibilitie = await Dresponsibilities.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/Dresponsibilities', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.dresponsibilities;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Dresponsibilities({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        designation: responsibility.designation,
        fromDate: responsibility.fromDate,
        toDate: responsibility.toDate
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/api/Dresponsibilities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Dresponsibilities.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Educational', async (req, res) => {
  try {
    const dresponsibilitie = await Educational.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Educational', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.Educational;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Educational({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        degree: responsibility.degree,
        field: responsibility.field,
        university: responsibility.university,
        year: responsibility.year
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Educational/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Educational.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Experience', async (req, res) => {
  try {
    const dresponsibilitie = await Experience.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Experience', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.Experience;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Experience({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        designation: responsibility.designation,
        branch: responsibility.branch,
        college: responsibility.college,
        fromDate: responsibility.fromDate,
        toDate: responsibility.toDate
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Experience/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Experience.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Links', async (req, res) => {
  try {
    const dresponsibilitie = await Links.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Links', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.Links;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Links({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        title: responsibility.title,
        url: responsibility.url,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Links/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Links.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/National/fill', async (req, res) => {
  try {
    const dresponsibilitie = await National.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/National/fill', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new National({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        author_name: responsibility.author_name,
          title: responsibility.title,
          confname: responsibility.confname,
          published: responsibility.published,
          venue: responsibility.venue,
          date: responsibility.date,
          vol: responsibility.vol,
          vol_no: responsibility.vol_no,
          page_no: responsibility.page_no,
          indexing: responsibility.indexing,
          dol_link: responsibility.dol_link,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/National/fill/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await National.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/National/user', async (req, res) => {
  try {
    const dresponsibilitie = await Nationaluser.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/National/user', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Nationaluser({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        textbox: responsibility.textbox,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/National/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Nationaluser.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




app.get('/Nationaljournal/fill', async (req, res) => {
  try {
    const dresponsibilitie = await Nationaljournal.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Nationaljournal/fill', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Nationaljournal({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        author_name: responsibility.author_name,
          title: responsibility.title,
          journalname: responsibility.journalname,
          published: responsibility.published,
          date: responsibility.date,
          issue: responsibility.issue,
          venue: responsibility.venue,
          vol: responsibility.vol,
          vol_no: responsibility.vol_no,
          page_no: responsibility.page_no,
          indexing: responsibility.indexing,
          impact: responsibility.impact,
          dol_link: responsibility.dol_link,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Nationaljournal/fill/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Nationaljournal.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Nationaljournal/user', async (req, res) => {
  try {
    const dresponsibilitie = await Nationaljournaluser.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Nationaljournal/user', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Nationaljournaluser({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        textbox: responsibility.textbox,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Nationaljournal/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Nationaljournaluser.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Internationaljournal/fill', async (req, res) => {
  try {
    const dresponsibilitie = await Internationaljournal.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Internationaljournal/fill', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Internationaljournal({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        author_name: responsibility.author_name,
          title: responsibility.title,
          journalname: responsibility.journalname,
          published: responsibility.published,
          date: responsibility.date,
          issue: responsibility.issue,
          venue: responsibility.venue,
          vol: responsibility.vol,
          vol_no: responsibility.vol_no,
          page_no: responsibility.page_no,
          indexing: responsibility.indexing,
          impact: responsibility.impact,
          dol_link: responsibility.dol_link,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Internationaljournal/fill/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Internationaljournal.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Internationaljournal/user', async (req, res) => {
  try {
    const dresponsibilitie = await Internationaljournaluser.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Internationaljournal/user', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Internationaljournaluser({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        textbox: responsibility.textbox,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Internationaljournal/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Internationaljournaluser.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Internationalconference/fill', async (req, res) => {
  try {
    const dresponsibilitie = await Internationalconference.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Internationalconference/fill', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Internationalconference({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        author_name: responsibility.author_name,
          title: responsibility.title,
          journalname: responsibility.journalname,
          published: responsibility.published,
          date: responsibility.date,
          issue: responsibility.issue,
          venue: responsibility.venue,
          vol: responsibility.vol,
          vol_no: responsibility.vol_no,
          page_no: responsibility.page_no,
          indexing: responsibility.indexing,
          impact: responsibility.impact,
          dol_link: responsibility.dol_link,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Internationalconference/fill/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Internationalconference.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Internationalconference/user', async (req, res) => {
  try {
    const dresponsibilitie = await Internationalconferenceuser.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Internationalconference/user', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Internationalconferenceuser({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        textbox: responsibility.textbox,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Internationalconference/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Internationalconferenceuser.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Bookchapter/fill', async (req, res) => {
  try {
    const dresponsibilitie = await Bookchapter.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Bookchapter/fill', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Bookchapter({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        author_name: responsibility.author_name,
          title: responsibility.title,
          journalname: responsibility.journalname,
          published: responsibility.published,
          date: responsibility.date,
          issue: responsibility.issue,
          venue: responsibility.venue,
          vol: responsibility.vol,
          vol_no: responsibility.vol_no,
          page_no: responsibility.page_no,
          indexing: responsibility.indexing,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Bookchapter/fill/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Bookchapter.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Bookchapter/user', async (req, res) => {
  try {
    const dresponsibilitie = await Bookchapteruser.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Bookchapter/user', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.National;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Bookchapteruser({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        textbox: responsibility.textbox,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Bookchapter/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Bookchapteruser.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/Academic/ug', async (req, res) => {
  try {
    const dresponsibilitie = await Academicug.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Academic/ug', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.courses;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Academicug({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        course: responsibility.course,
      });
      console.log(responsibility.course);
      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Academic/ug/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Academicug.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Academic/pg', async (req, res) => {
  try {
    const dresponsibilitie = await Academicpg.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Academic/pg', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.courses;
    
    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const savedResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Academicpg({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        course: responsibility.course,
      });

      const savedResponsibility = await newResponsibilities.save();
      savedResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(savedResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/Academic/pg/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Academicpg.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/Details', async (req, res) => {
  try {
    const userInfo = await Details.findOne();
    // You might want to add conditions here to fetch a specific user's info
    res.json(userInfo);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Error fetching user info' });
  }
});


app.post('/Details', async (req, res) => {
  try {
    await Details.deleteMany();
    const { email, phone } = req.body;
    const userInfo = new Details({ email, phone });
    await userInfo.save();
    res.json(userInfo);
  } catch (error) {
    console.error('Error saving user info:', error);
    res.status(500).json({ error: 'Error saving user info' });
  }
});





app.get('/api/Responsibilities', async (req, res) => {
  try {
    
    const dresponsibilitie = await Responsibilities.find(); 
    res.json(dresponsibilitie);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/Responsibilities', async (req, res) => {
  try {
    const responsibilitiesArray = req.body.Responsibilities;

    // Validate required fields for each responsibility in the array
    // Create and save each responsibility in the array
    const saveResponsibilities = [];
    for (const responsibility of responsibilitiesArray) {
      const newResponsibilities = new Responsibilities({
        _id: responsibility._id || new mongoose.Types.ObjectId(), // Use provided _id or generate a new ObjectId
        designation: responsibility.designation,
        fromDate: responsibility.fromDate,
        toDate: responsibility.toDate
      });

      const savedResponsibility = await newResponsibilities.save();
      saveResponsibilities.push(savedResponsibility);
    }

    res.status(201).json(saveResponsibilities);
  } catch (error) {
    console.error('Error creating responsibilities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/api/Responsibilities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Responsibilities.findByIdAndDelete(id);
    res.status(200).send('Detail deleted successfully');
  } catch (error) {
    console.error('Error deleting detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

