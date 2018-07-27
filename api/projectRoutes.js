const router = require('express')();
const Project = require('../data/helpers/projectModel');

//@route    POST api/projects/
//@desc     create project
//@access   public
router.post('/', async (req, res, next) => {
  const { name, description, completed } = req.body;
  if (!name || !description) {
    next({ code: 400, message: 'Please include a name and description' });
  }
  const project = {
    name,
    description,
    completed
  };

  try {
    const created = await Project.insert(project);
    res.status(201).json(created);
  } catch (err) {
    next({ code: 500, message: err.message });
  }
});

//@route    GET api/projects/
//@desc     get all projects
//@access   public
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.get();
    res.status(200).json(projects);
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

//@route    GET api/projects/:id
//@desc     get a single project
//@access   public
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const project = await Project.get(id);
    res.status(200).json(project);
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

//@route    PUT api/projects/:id
//@desc     update a single project
//@access   public
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  if (!name || !description) {
    next({ code: 400, message: err.message });
  }
  const project = {
    name,
    description,
    completed
  };

  try {
    const updated = await Project.update(id, project);
    res.status(201).json(updated);
  } catch (err) {
    next({ code: 500, message: err.message });
  }
});

//@route    DELETE api/projects/:id
//@desc     delete a single project
//@access   public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deleted = await Project.remove(id);
    if (deleted > 0) {
      res.status(201).json({ msg: 'Project successfully deleted' });
    } else next({ code: 500, message: 'Error deleting project' });
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

//@route    GET api/projects/:id/actions
//@desc     get all actions associated with a single project
//@access   public
router.get('/:id/actions', async (req, res, next) => {
  const { id } = req.params;

  try {
    const actions = await Project.getProjectActions(id);
    res.status(200).json(actions);
  } catch (err) {
    next({ code: 400, message: err.message });
  }
});

module.exports = router;
